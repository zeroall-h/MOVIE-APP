import { Store } from "../core/heropy";

interface State {
  photo: string
  name: string
  email: string
  github: string
  repository: string
}

export default new Store<State>({
  photo:'https://placekitten.com/300/300',
  name: 'Zeorall / Heodayeong',
  email: 'heodayeong@gmail.com',
  github: 'https://github.com/zeroall-h',
  repository: 'https://github.com/zeroall-h/MOVIE-APP'
})