function switchItems(arr, subject){
    let subjectItem = arr[subject];
    let previousSubjectItem = arr[subject - 1];

    arr[subject] = previousSubjectItem;
    arr[subject - 1] = subjectItem ;
}

module.exports = switchItems;