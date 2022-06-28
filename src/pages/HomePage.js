import Card from '../components/Card.js'
import Button from '../components/Button.js'



function HomePage({data}) {
    

    return (
        <div className="card-container grid wide">
            <div className="row">
                {data.map((info, index) => (
                        <div className="col c-4" key={index}>
                            <div className="user-card">
                                <Card info={info} />
                                <Button id={info.id}/>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default HomePage