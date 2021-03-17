import React from 'react';
import shed from "../images2/shed.jpg";
import shedb4 from "../images2/shed_b4.jpg";
import wash from "../images2/wash.jpg";
import washb4 from "../images2/wash_b4.jpg";
import paint from "../images2/paint.jpg";
import paintb4 from "../images2/paint_b4.jpg";
import tile from "../images2/tile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

function Portfolio() {
    //KIWI POPUP
    const openPopKiwi = () => {
        const content = (
            <>
                <img className="portfolio-image-pop" src={shed} alt="Game Kiwi App..." />
                <p>A Stand-Alone shed</p>

            </>
        )
        PopupboxManager.open({ content });
    }
    const popupKiwiConfig = {
        titleBar: {
            enable: true,
            text: "Finished project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    };
    //UP2U POPUP
    const openPopJob = () => {
        const content = (
            <>
                <img className="portfolio-image-pop" src={wash} alt="Up2U Job Search App..." />
                <p>Touch up and power-wash of a frontdoor molding.</p>

            </>
        )
        PopupboxManager.open({ content });
    }
    const popupJobConfig = {
        titleBar: {
            enable: true,
            text: "Finished project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    };
    //Portfolio POPUP
    const openPopOG = () => {
        const content = (
            <>
                <img className="portfolio-image-pop" src={paint} alt="HTML/CSS portfolio..." />
                <p>Paint and Finish on a beautiful backyard deck.
            </p>

            </>
        )
        PopupboxManager.open({ content });
    }
    const popupOGConfig = {
        titleBar: {
            enable: true,
            text: "Finished project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    };
    //Portfolio POPUP
    const openTileJob = () => {
        const content = (
            <>
                <img className="portfolio-image-pop" src={tile} alt="HTML/CSS portfolio..." />
                <p>Custom tile work, and bathroom remodel.
                </p>

            </>
        )
        PopupboxManager.open({ content });
    }
    const popupTileConfig = {
        titleBar: {
            enable: true,
            text: "Finished project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    };

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopKiwi}>
                        <img className="portfolio-image" src={shedb4} alt="Game Kiwi App..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-image-box" onClick={openPopOG}>
                        <img className="portfolio-image" src={paintb4} alt="Original Portfolio page..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-image-box" onClick={openPopJob}>
                        <img className="portfolio-image" src={washb4} alt="Remote WebDev Job search..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-image-box" onClick={openTileJob}>
                        <img className="portfolio-image" src={tile} alt="Game Kiwi App..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupKiwiConfig} />
            <PopupboxContainer {...popupJobConfig} />
            <PopupboxContainer {...popupOGConfig} />
            <PopupboxContainer {...popupTileConfig} />
        </div >

    )
}

export default Portfolio
