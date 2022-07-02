import {Sidebar} from '../components/Sidebar/Sidebar';
import './Layout.scss'

interface Props {
  children: React.ReactNode,
}

export const Layout = (props: Props) => {
  return (
    <div className='Layout'>
      <Sidebar/>
      {
        props.children
      }
    </div>
  )
}