function PhotoControls ({ onNext, onPrevious, onColor, onBlackAndWhite}){
    return (
        <p>
            <button onClick={onPrevious}>Previous Img</button>
            <button onClick={onNext}>Next Img</button>
            <button onClick={onColor}> Set Color</button>
            <button onClick={onBlackAndWhite}>Monochrome</button>

        </p>
    );
}

export default PhotoControls;