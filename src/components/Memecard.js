const MemeCard=({data})=>{
    const {title,url} = data;
    return (

        <div className="p-5 m-5 border-black">
        <h2>{title}</h2>
        <img className="w-64 h-64" src={url} alt={title}></img>
       </div>
    )
}
export default MemeCard;