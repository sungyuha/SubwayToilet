const Button = (props) => {
    return (
        <button 
        type={props.type || 'button'}
        onClick={props.onClick} 
        >
            역 상세보기
        </button>
    );
};

export default Button;