
function Card({info}) {
   
    return (
        <div key={info.id}>
            <p className="card-icon">{info.name[0]}</p>
            <h2 className="card-fullname">{info.name}</h2>
            <p className="card-username">@{info.username}</p>
            <a className="card-link" href={`http://${info.website}`}>{`http://${info.website}`}</a>
        </div>
    )
}

export default Card