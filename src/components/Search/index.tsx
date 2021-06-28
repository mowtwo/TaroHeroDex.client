import { Component, LegacyRef } from 'react'
import { inject, observer } from 'mobx-react'
import './index.scss'
import { Input, View } from '@tarojs/components'
import { computed, observable } from 'mobx'

type PageStateProps = {
  placeholder?: string
  onInput: (value: string) => any
}

interface Search {
  props: PageStateProps
}

@inject('store')
@observer
class Search extends Component {
  @observable hiddenMore: boolean = false
  @computed
  get moreWidth(): string {
    return this.hiddenMore ? '0' : '30%'
  }
  @computed
  get cancelDisplay(): string {
    return this.hiddenMore ? 'flex' : 'none'
  }
  render() {
    // const inputRef:LegacyRef<typeof Input> = null
    return (
      <View className="search">
        <View
          className="search__more"
          style={{
            width: this.moreWidth,
          }}
        >
          更多选项
        </View>
        <View className="search__input">
          <Input
            className="search__input-el"
            placeholder={this.props.placeholder}
            onInput={(e) => this.props.onInput(e.detail.value)}
            onFocus={() => {
              this.hiddenMore = true
            }}
            onBlur={(e) => {
              console.log(e.target)
              this.hiddenMore = false
            }}
          />
        </View>
      </View>
    )
  }
}
export default Search
