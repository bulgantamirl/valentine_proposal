import React, {use, useState} from 'react';
import bg from '../../assets/bg.jpg';
import shaylah from '../../assets/myShayla.gif'
import Confetti from 'react-confetti';
import gomb from "../../assets/gomb.png"
import mijka from "../../assets/mijka.png"
import handa from "../../assets/hand.png"
import moomins from "../../assets/moomins.jpg"
import cat3 from "../../assets/cat3.gif"
import cat2 from "../../assets/cat2.gif"
import loverCats from "../../assets/loverCats.gif"
import roseCat from "../../assets/roseCat.png"
import bible from "../../assets/bible.png"
import chingis from "../../assets/chingis.png"
import heart from "../../assets/heart.svg"
import rizz from "../../assets/rizz.gif"


import AutoPlaySound from "./AutoSound";
import MovingButton from "./MovingButton";
import FloatingHearts from "./FloatingHears";

const RenderStages = () => {
    const [stage, setStage] = useState(1);
    const [approved, setApproved] = useState(false)
    return (
        <>
            {stage === 1 ? (
                <div className="flex flex-col gap-4 items-center">
                    <img src={mijka} alt="my shaylah" className="w-[100px] absolute top-[15%] right-[15%] animate-waving-hand opacity-60" />
                    <img src={mijka} alt="my shaylah" className="w-[100px] absolute top-[15%] left-[15%] animate-waving-hand opacity-60" />
                    <div className={'flex flex-row gap-2 items-center'}>
                        <img src={cat2} alt="my shaylah" className="w-[200px]" />
                        <img src={shaylah} alt="my shaylah" className="w-[200px]" />

                    </div>
                    <p className="font-semibold text-pink-300 text-[24px]">
                        OOHHHH MY BEYBII! MA BEBII
                    </p>

                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        recycle={false}
                        numberOfPieces={500}
                    />
                    <AutoPlaySound audio={"https://www.myinstants.com/media/sounds/happy-happy-happy-cat.mp3"} />
                    <button
                        onClick={() => setStage(2)}
                    >
                        Continue
                    </button>
                </div>
            ) : stage === 2 ?
                (
                    <div className="text-center w-full max-w-[700px] flex flex-col gap-4 items-center">
                        <img className={'w-[150px] absolute top-[15%] right-[15%] animate-waving-hand '} src={bible} alt={"bible"} />
                        <img className={'w-[150px] absolute top-[15%] left-[15%] animate-waving-hand'} src={bible} alt={"bible"} />
                        <div className={'flex flex-row w-full items-center gap-2 justify-center'}>
                            <img className={'w-[250px] '} src={roseCat} alt={"bible"} />
                            <img className={'w-[250px]'} src={cat3} alt={''} />
                        </div>

                        <p className="font-semibold text-pink-300 text-[36px]">
                            WILL YOU BE MY VALENTINE ?
                        </p>

                        <div className={'w-full h-[200px] items-center flex flex-row gap-6 relative justify-center'}>
                            <div className={'h-[200px] w-[250px] relative'}>
                                <MovingButton  />
                            </div>

                            <button
                                style={{width: 250, fontSize: 13}}
                                onClick={() => setStage(3)}
                            >
                                YES, OFC MY <br /> HANDSOME BATMAN

                            </button>
                        </div>
                    </div>
                )
            :
                <div className="text-center w-full max-w-[700px] flex flex-col gap-4 items-center">
                    <img className={'w-[150px] absolute top-[15%] right-[15%] animate-waving-hand z-10 opacity-60'} src={heart} alt={"heart"} />
                    <img className={'w-[150px] absolute top-[15%] left-[15%] animate-waving-hand z-10 opacity-60'} src={heart} alt={"heart"} />
                    <img className={'w-[250px] z-20'} src={loverCats} alt={''} />
                    <img className={'w-[200px] z-20 opacity-60 animate-waving-hand absolute top-[35%] left-[15%]'} src={rizz} alt={''} />
                    <img className={'w-[200px] z-20 opacity-60 animate-waving-hand absolute top-[35%] right-[15%]'} src={rizz} alt={''} />


                    <img className={'w-full top-[-70%] h-auto object-cover opacity-25 absolute z-0'} src={chingis} alt={''} />
                    <p className="font-semibold text-pink-300 text-[24px] relative w-full z-10">
                        <span className={'text-red1'}>
                             Оройн 18:30-д
                        </span>

                        <br/>
                        Чингис музейн урд хөөрхөн таныг болзоонд урьж байна аа.
                        <br/>
                        Хөөрхөн бүсгүй таныг хүндэтгэн хайрласан <i>Булгаа {"<3"} </i>
                    </p>
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        recycle={false}
                        numberOfPieces={500}
                    />
                    <FloatingHearts />
                    <AutoPlaySound audio={"https://www.myinstants.com/media/sounds/the-weeknd-rizzz.mp3"} />

                    <div className={'w-full items-center flex flex-row gap-6 relative justify-center'}>


                            { !approved ?
                                <button onClick={()=> setApproved(true)}>
                                    OK
                                </button>
                                :
                                <span className={"text-red2 font-semibold text-[32px]"}>
                                    ҮНСЬЕ ХАЙРЫГАА!
                                </span>
                            }

                    </div>
                </div>}
        </>
    );
};


const Valentine = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numberRight, setNumberRight] = useState(false)
    const handleInputChange = (e) => {
        const value = e.target.value;

        // Limit the phone number to 10 digits
        if (value.length <= 8) {
            setPhoneNumber(value);
        }

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phoneNumber)
        if (phoneNumber === '99169719') {
            console.log("my shaylah")
            setNumberRight(true);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit(e); // Submit the form when Enter is pressed
        }


    }
    return (
        <div
            className="w-full h-screen overflow-x-hidden overflow-y-hidden flex flex-col items-center gap-4 justify-center relative bg-repeat"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: "600px 600px" }}
        >
            <img className={'w-[200px] absolute bottom-[60px] opacity-60 left-[60px] animate-waving-hand'} src={gomb} alt={"gombo"} />
            <img className={'w-[200px] absolute bottom-[60px] right-[60px] animate-waving-hand'} src={handa} alt={"handa"} />


            {
                numberRight ?
                (
                    <RenderStages />
                )
                    :
                    <>
                        <img className={'w-[200px]'} src={moomins} alt={''}/>
                        <h2 className={'text-[20px] font-semibold text-red1'}>
                            Enter your phone number
                        </h2>
                        <form onSubmit={handleSubmit} className={'flex flex-col gap-4'}>
                            <input type="tel" onChange={handleInputChange} onKeyDown={handleKeyDown} className={"w-[300px]"} placeholder={"Утасны дугаар"} />
                            <button
                                htmlType={"submit"}
                            >
                                Submit
                            </button>
                        </form>

                    </>

            }

        </div>
    );
};

export default Valentine;
