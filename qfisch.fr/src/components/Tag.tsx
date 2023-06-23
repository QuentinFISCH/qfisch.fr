import "./Tag.scss"

export default function Tag({color = "blue", text = "Tag"}) {
  return (
    <div className={"tag " + color}>
        <p>{text}</p>
    </div>
  )
}
