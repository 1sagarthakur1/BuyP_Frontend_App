import style from '../Style/message.module.css'

export default function Warning(props) {
    return (
        <div className={style.main_containerWarning} style={{ top: props.top }}>
            <p>! {props.data}</p>
        </div>
    )
}
