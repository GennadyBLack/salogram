import {computed} from "vue";

export default function (entry) {
    let object = {}
    if(typeof entry === "object" && !!entry)
    Object.keys(entry).forEach((el) => {
        object[el] = computed({
            get() {
                if(el && entry) {
                    return  entry[el] ? entry[el] : "-"
                }
            },
        })
    })
    let mappedObject = {}
    Object.keys(object).forEach((preValue) => {
        mappedObject[preValue] = object[preValue]?.value
    })
    return mappedObject
}