import style from '../Style/message.module.css'
export default function Message(props) {
  
  return (
    <div className={style.main_containerMessage} style={{top:props.top}}>
      <p>! {props.data}</p>
    </div>
  )
}
