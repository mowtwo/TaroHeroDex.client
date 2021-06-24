import { ScrollView, View } from '@tarojs/components'
import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import { Component } from 'react'
import { baseUrl } from '../../utils/request'
import { Hero, list } from '../../apis/list'
import { Card } from '../../components/Card/index'
import './index.scss'

type PageStateProps = {}

interface Index {
  props: PageStateProps
}

@inject('store')
@observer
class Index extends Component {
  @observable heroesList: Hero[] = []
  async componentDidMount() {
    const data = await list()
    this.heroesList = data.data
  }
  render() {
    console.log(this.heroesList)
    return (
      <ScrollView scrollY className="scroll-view">
        <View>
          {this.heroesList.map((item) => (
            <Card
              image={[baseUrl, item.localImage].join('/')}
              name={item.cnName}
            />
          ))}
        </View>
      </ScrollView>
    )
  }
}
export default Index
