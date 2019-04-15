import Taro from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import './gallery.scss'

export default class Gallery extends Taro.Component {

  render () {
    const { list } = this.props
    const length = list.length
    let className = ['gallery-item', `w${length}`];
    if ([1, 2, 5, 6, 7, 8, 9].includes(length)) {
      return (
        <View className='list-gallery'>
          {
            list.map((e) => {
              return (
                <View className={className} key={e} style={{backgroundImage: `url(${e})`}} />
              )
            })
          }
          {
            (length === 8 || length === 5)  && (
              <View className={className} />
            )
          }
        </View>
      )
    }

    if (length === 3 || length === 4) {
      let className1 = `gallery${length}-big`
      let className2 = `gallery${length}-small`
      let list1 = [list[0]]
      let list2 = list.filter((n, index) => index > 0 )
      return (
        <View className='list-gallery'>
          <View className={className1}>
            {
              list1.map((e) => {
                return (
                  <View className={className} key={e} style={{backgroundImage: `url(${e})`}} />
                )
              })
            }
          </View>
          <View className={className2}>
            {
              list2.map((e) => {
                return (
                  <View className={className}  key={e}>
                    <View className={className} key={e} style={{backgroundImage: `url(${e})`}} />
                  </View>
                )
              })
            }
          </View>
        </View>
      )
    }
  }
}

Gallery.defaultProps = {
  list: []
}

