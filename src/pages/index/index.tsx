import { ScrollView, View } from '@tarojs/components'
import { computed, observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import { Component } from 'react'
import { baseUrl } from '../../utils/request'
import { Hero, list } from '../../apis/list'
import { Card } from '../../components/Card/index'
import './index.scss'
import Search from '../../components/Search/index'

type PageStateProps = {}

interface Index {
  props: PageStateProps
}

type FilterFunc<T> = (target: T, index?: number) => boolean

@inject('store')
@observer
class Index extends Component {
  @observable heroesList: Hero[] = []
  @observable searchWord: string = ''
  filterList: FilterFunc<Hero>[] = [
    (item) =>
      item.cnName.includes(this.searchWord) ||
      item.enName.includes(this.searchWord),
  ]
  @computed
  get renderHeroesList(): Hero[] {
    let result: Hero[] = this.heroesList
    for (const func of this.filterList) {
      result = result.filter(func)
    }
    return result
  }
  async componentDidMount() {
    const data = await list()
    this.heroesList = data.data
  }
  render() {
    return (
      <View className="app">
        <Search
          placeholder="请输入英雄名称"
          onInput={(value) => (this.searchWord = value)}
        />
        <ScrollView scrollY className="scroll-view">
          <View>
            {this.renderHeroesList.map((item) => (
              <Card
                image={[baseUrl, item.localImage].join('/')}
                name={item.cnName}
                role={item.role}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}
export default Index
