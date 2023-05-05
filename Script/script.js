
function Intro(props){
    return(
        <div className="intro container d-flex justify-content-center align-items-center 
        border border-warning mt-5">
            <apresentacao className='apresentacao'>
                <span className="ola">{props.ola}</span>
                <Sorin className="sorin ola"></Sorin>
                <span>{props.intro}</span>
            </apresentacao>
        </div>
    )}
