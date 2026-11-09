Question: What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?
Type Alias এবং Interface-এর মধ্যে পার্থক্য কী? কখন কোনটি ব্যবহার করা উচিত?
TypeScript-এ type এবং interface দুটিই ডেটার কাঠামো নির্ধারণ করতে ব্যবহৃত হয়। তবে এদের মধ্যে কিছু পার্থক্য রয়েছে।

১. Type Alias:

type ব্যবহার করে বিভিন্ন ধরনের ডেটার জন্য নিজস্ব নাম তৈরি করা যায়। যেমন: অবজেক্ট, ইউনিয়ন, ইন্টারসেকশন, টাপল এবং সাধারণ ডেটার ধরন।

```
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";

type ID = string | number;
```

২. Interface:

interface মূলত অবজেক্টের কাঠামো নির্ধারণ করতে ব্যবহৃত হয়। এর মাধ্যমে অবজেক্টের বৈশিষ্ট্য এবং ডেটার ধরন নির্ধারণ করা যায়।

```
interface User {
  name: string;
  age: number;
}
```

৩. মূল পার্থক্য:

- type দিয়ে ইউনিয়ন ও ইন্টারসেকশন তৈরি করা যায়।
- interface দিয়ে একই নামের একাধিক ঘোষণা একত্রিত করা যায়।
- type একই নামে পুনরায় ঘোষণা করা যায় না।
- interface অন্য ইন্টারফেস থেকে extends ব্যবহার করে বৈশিষ্ট্য গ্রহণ করতে পারে।
- type একাধিক কাঠামো একত্রিত করতে & ব্যবহার করে।
  ৪. কখন কোনটি ব্যবহার করব?
- অবজেক্টের কাঠামো তৈরিতে interface ব্যবহার করব।
- ইউনিয়ন, ইন্টারসেকশন, টাপল ও সাধারণ ডেটার ধরন তৈরিতে type ব্যবহার করব।
- শ্রেণির কাঠামো নির্ধারণেও interface ব্যবহার করা যায়।

উপসংহার: দুটিই TypeScript-এর গুরুত্বপূর্ণ বৈশিষ্ট্য। প্রয়োজন অনুযায়ী সঠিকটি নির্বাচন করাই ভালো।
