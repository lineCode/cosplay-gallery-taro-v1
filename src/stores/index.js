/*
* 所有的stores都放到这里来整合吧
* */
import commonStore from './commonStore'
import counterStore from './counterStore'
import indexStore from './indexStore'
import publishStore from './publishStore'
import commentStore from './commentStore'
import detailStore from './detailStore'
import userStore from './userStore'
import userScoreStore from './userScoreStore'

const stores = {
  counterStore,
  indexStore,
  commentStore,
  commonStore,
  detailStore,
  userStore,
  userScoreStore,
  publishStore
}

export default stores;
