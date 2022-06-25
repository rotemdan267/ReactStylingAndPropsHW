import React from "react";


export function StudentComp(props) {

    let color = 'red';
    let comment = '(poor)';

    if (props.studentGrade > 56) {
        color = 'yellow';
        comment = '(ok)';        
    };

    if (props.studentGrade > 75) {
        color = 'orange';
        comment = '(Good)';        
    };

    if (props.studentGrade > 85) {
        color = 'green';
        comment = '(Excellent)';        
    };

    return (<>
        <p style={{ backgroundColor: color }}>{props.studentName} - {props.studentId} - {props.studentGrade} - {comment}</p>
    </>);
}


export function StudentListComp() {
    return ( 
        <ul>
            <li>    <StudentComp studentName='Moshe Levi' studentId={1} studentGrade={79} />        </li>
            <li>    <StudentComp studentName='Matan Cohen' studentId={2} studentGrade={95} />       </li>
            <li>    <StudentComp studentName='Shimon Mizrahi' studentId={3} studentGrade={25} />    </li>
            <li>    <StudentComp studentName='Reuven Atar' studentId={4} studentGrade={63} />       </li>
        </ul>
     );
}