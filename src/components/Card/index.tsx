import { View, Image } from '@tarojs/components'
import { baseUrl } from '../../utils/request'
import './index.scss'

type Props = {
  image: string
  name: string
  role?: string
}

export const Card = (props: Props) => {
  return (
    <View className="card">
      <View className="card__image">
        <Image className="card__image-el" src={props.image} mode="aspectFill" />
      </View>
      <View className="card__info">
        <View className="card__info-name">{props.name}</View>
        <View
          className={[
            'card__info-role',
            `card__info-role-${props.role ?? 'tank'}`,
          ].join(' ')}
          style={{
            backgroundImage: `url(${baseUrl + '/images/hero_roles.png'})`,
          }}
        ></View>
      </View>
    </View>
  )
}
