

const Notification = ({ errorMessage, successMessage }) => {

    console.log(successMessage)

    if (successMessage.display) {
        return (
            <div>
                <h2>{successMessage.message}</h2>
            </div>
        )
    } else if (errorMessage.display) {
        return (
            <div>
                <h2>{errorMessage.message}</h2>
            </div>
        )
    }


}

export default Notification


