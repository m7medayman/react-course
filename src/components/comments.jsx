
const Comment=({comment:{id,name,description}})=>{
    return(
        <div key={id}>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    )
}
export default Comment