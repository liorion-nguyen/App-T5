import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Home() {
    // Index sẽ được đếm từ 0 -> lenM - 1

    let names = ["Phu", "Huy", "Anh", "Khoi"];

    const randoms = [2, 1, 3, 5, 4, 6, 9, 2];

    const evenNumbers = randoms.filter(item => item < 3)
    console.log("Day la so chan: ", evenNumbers);

    names.map((item, index) => {
        console.log(item, index);
    })

    let t = 1;
    randoms.map((item, index) => {
        t = t * item; // t *= item;
    })
    console.log(t);
    

    const doubleRandoms = randoms.map((item, index) => {
        return item * 2;
    });
    console.log(doubleRandoms);

    // Tính tích điểm của các bạn sinh viên có điểm <= 5.
    
    


    // const fakeRandoms = [...randoms];
    // console.log(fakeRandoms);

    // Tạo 1 array để lưu trữ tên các bộ môn thể thao(3, 4 bộ môn).
    // console.log(names.length); // lấy ra độ dài của mảng

    // const n = names.length;
    // console.log(names[n - 1]);

    // names.push("Hieu");
    // console.log(names);
    // names.pop();

    // names[0] = "An Phu"
    // console.log(names);

    // for (let i = 0; i < names.length; i++) {
    //     console.log(`Index: ${i + 1} - Name: ${names[i]}`);
    // }
    // for (let name of names) {
    //     console.log(name);
    // }
    // Dùng vòng for để duyện và in ra tên các bộ môn thể thao trong mảng.

    // In ra các số chẵn trong mảng

    // let s = 0;
    // for (let number of randoms) {
    //     if (number % 3 == 0) {
    //         s = s + number;
    //     }
    // }
    // console.log(s);

    // Tạo mảng chứa điểm của các bạn sinh viên(3-10). In ra tổng điểm của những bạn có điểm trên 5.
    // Tạo 1 biến để chứa phần copy từ mảng tên bộ môn thể thao.
    // Tạo 1 mảng mới chứa tên 1 vài bộ môn thể thao.
    // Tạo 1 mảng mới chứa tên các bộ môn thể thao từ 2 mảng trên.


    const [subjects, setSubjects] = useState(["Math", "English", "History", "Geography"]);
    const [newSubject, setNewSubject] = useState("");
    return (
        <View>
            <Text>Home</Text>
            {
                subjects.map((item, index) => (
                    <Text key={index}>{item}</Text>
                ))
            }
            <View>
                <TextInput value={newSubject} placeholder="Enter add ..." onChangeText={setNewSubject} />
                <Button title="Add" onPress={() => {
                    setSubjects([...subjects, newSubject]);
                    setNewSubject("");
                }} />
            </View>
        </View>
    )
}