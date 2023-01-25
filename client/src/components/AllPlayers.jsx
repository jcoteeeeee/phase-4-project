import PlayerBio from './PlayerBio'

const AllPlayers = ( {players, handleOnClick} ) => {
    return(
        <div> 
            {
                players.map((player) => {
                    return (
                        <div onClick={() => {
                            handleOnClick(player)}}>
                            <PlayerBio player={player} handleOnClick={handleOnClick} />
                        </div>
                    )
                })
            }
        </div>
    )
}  

export default AllPlayers