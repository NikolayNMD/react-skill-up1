function Task (props) {
    return (
        <div className="bg-cyan-100 p-10 rounded">
            <h3 className="font-bold mb-5">{props.title}</h3>
            <p>{props.description}</p>
            <p className={props.isCompleted ? "text-green-500" : "text-red-500"}>{props.isCompleted ? "Завершено" : "Не завершено"}</p>
        </div>
    );
}

export default Task