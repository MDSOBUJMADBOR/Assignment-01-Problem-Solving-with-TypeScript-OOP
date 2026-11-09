TypeScript-এ Type Narrowing কী? typeof, instanceof এবং in অপারেটরের ব্যবহার
Type Narrowing হলো TypeScript-এর এমন একটি প্রক্রিয়া, যার মাধ্যমে কোনো ভেরিয়েবলের একাধিক সম্ভাব্য ডেটার ধরন থেকে নির্দিষ্ট একটি ধরন শনাক্ত করা যায়।

সহজ ভাষায়, কোনো ভেরিয়েবল বিভিন্ন ধরনের ডেটা গ্রহণ করতে পারলে শর্তের মাধ্যমে তার সঠিক ধরন নির্ধারণ করাকে Type Narrowing বলে। এর ফলে কোডে ভুল কমে এবং নিরাপদে কাজ করা যায়।
১. typeof অপারেটর
typeof ব্যবহার করে কোনো ভেরিয়েবলের সাধারণ ডেটার ধরন শনাক্ত করা যায়।

উদাহরণ:

```
function process(value: string | number) {
if (typeof value === "string") {
return value.toUpperCase();
} else {
return value \* 10;
}
}

console.log(process("sobuj")); // SOBUJ
console.log(process(10)); // 100
```

এখানে typeof দিয়ে যাচাই করা হয়েছে ভেরিয়েবলটি লেখা নাকি সংখ্যা।
২. instanceof অপারেটর
instanceof ব্যবহার করে কোনো অবজেক্ট নির্দিষ্ট শ্রেণির তৈরি কি না, তা যাচাই করা যায়।

উদাহরণ:

```
class Dog {
bark() {
return "Dog is barking";
}
}

class Cat {
meow() {
return "Cat is meowing";
}
}

function makeSound(animal: Dog | Cat) {
if (animal instanceof Dog) {
return animal.bark();
} else {
return animal.meow();
}
}
```

এখানে instanceof দিয়ে অবজেক্টটি Dog নাকি Cat শ্রেণির, তা শনাক্ত করা হয়েছে।
৩. in অপারেটর
in ব্যবহার করে কোনো অবজেক্টের মধ্যে নির্দিষ্ট বৈশিষ্ট্য আছে কি না, তা যাচাই করা যায়।

উদাহরণ:

```
type Admin = {
name: string;
role: string;
};

type User = {
name: string;
email: string;
};

function checkUser(person: Admin | User) {
if ("role" in person) {
return person.role;
} else {
return person.email;
}
}
```

এখানে in দিয়ে অবজেক্টের মধ্যে role বৈশিষ্ট্য আছে কি না, তা যাচাই করা হয়েছে।
উপসংহার
Type Narrowing TypeScript-এর একটি গুরুত্বপূর্ণ বৈশিষ্ট্য। typeof সাধারণ ডেটার ধরন, instanceof শ্রেণির পরিচয় এবং in অবজেক্টের বৈশিষ্ট্য যাচাই করতে ব্যবহৃত হয়। এগুলো ব্যবহার করলে কোড আরও নিরাপদ, পরিষ্কার এবং সহজে পরিচালনাযোগ্য হয়।
