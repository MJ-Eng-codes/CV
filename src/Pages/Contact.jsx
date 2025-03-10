import ContactPic from '../assets/birds.jpg';

export default function Contact() {

    return (

        <>
            <main className="Contact">
                <img src={ContactPic} alt="birds in a row" />

                <div className="p-contact">
                    <p>Looking to collaborate or share ideas?</p>
                    <p>Drop me a message! 😊 I’d love to connect! </p>
                </div>

            </main>

        </>

    )
}