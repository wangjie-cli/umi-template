import { connect, useDispatch } from 'umi'
import { Button } from 'antd'

import styles from './index.less'

function IndexPage({num}) {
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className={styles.title}>
        Page index
        <div>{num}</div>
        <Button onClick={() => {dispatch({type: 'demo/add', payload: 3})}}>点一点</Button>
      </h1>
    </div>
  )
}

const mapStateToProps = (state) => ({num: state.demo.num})

export default connect(mapStateToProps)(IndexPage)
