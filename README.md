
# TypeScript Assignment - 01 (Practice)

Next Level Software Development with AI Engineering — Programming Hero-এর TypeScript অ্যাসাইনমেন্ট-০১ প্র্যাকটিস রিপোজিটরি। এই রিপোজিটরিতে TypeScript-এর মৌলিক থেকে অ্যাডভান্সড কনসেপ্টের ওপর বাস্তবসম্মত কোডিং সমাধান এবং তাত্ত্বিক বিশ্লেষণ অন্তর্ভুক্ত রয়েছে।

---

## 📁 প্রজেক্ট কাঠামো (Repository Structure)

```text
├── solutions.ts          # ৮টি ব্যবহারিক সমস্যার TypeScript সমাধান
├── type-narrowing.md     # Type Narrowing (typeof, instanceof, in) সম্পর্কিত বিস্তারিত ডকুমেন্টেশন
├── type-vs-interface.md  # Type Alias বনাম Interface-এর পার্থক্য ও ব্যবহারের নিয়ম
└── README.md             # প্রজেক্ট গাইড এবং ডকুমেন্টেশন
```

---

## 📝 ব্যবহারিক সমস্যার সমাধান (`solutions.ts`)

`solutions.ts` ফাইলে সমাধান করা ৮টি সমস্যার সারসংক্ষেপ:

| সমস্যা নম্বর | বিষয়বস্তু / কনসেপ্ট (Topics) | ফাংশন / ক্লাসের নাম | বিবরণ |
| :--- | :--- | :--- | :--- |
| **Problem 01** | Optional Parameters & Default Fallback | `multiplyValue()` | একটি সংখ্যা এবং ঐচ্ছিক গুণক গ্রহণ করে গুণফল নির্ণয় করে (ডিফল্ট গুণক হিসেবে ২ ব্যবহৃত)। |
| **Problem 02** | Type Narrowing (Union Types) | `processInput()` | `string \| number \| boolean` ডেটা টাইপ যাচাই করে যথাক্রমে লোয়ারকেস স্ট্রিং, গুণিতক সংখ্যা বা স্ট্যাটাস টেক্সট রিটার্ন করে। |
| **Problem 03** | Tuples & Immutability | `formatCoordinate()` | `readonly [number, number, string]` টাপল থেকে অক্ষাংশ, দ্রাঘিমাংশ এবং স্থানের নাম ফরম্যাট করে স্ট্রিং তৈরি করে। |
| **Problem 04** | Generics & Rest Parameters | `concatenateArrays()` | যেকোনো টাইপের একাধিক অ্যারেকে জেনেরিক (`<T>`) মেকানিজমে একত্রিত (merge) করে একটি ফ্ল্যাট অ্যারে রিটার্ন করে। |
| **Problem 05** | Interfaces & Object Filtering | `getPopularCourses()` | `Course` ইন্টারফেসের ভিত্তিতে প্রকাশিত এবং নির্দিষ্ট শিক্ষার্থীসংখ্যার চেয়ে বেশি শিক্ষার্থীযুক্ত কোর্স ফিল্টার করে। |
| **Problem 06** | Generics, `keyof` & Lookup Types | `pluckValues()` | অবজেক্টের অ্যারে এবং নির্দিষ্ট প্রোপার্টি কী (`K extends keyof T`) গ্রহণ করে সংশ্লিষ্ট মানের অ্যারে (`T[K][]`) রিটার্ন করে। |
| **Problem 07** | OOP, Inheritance & Access Modifiers | `Employee`, `Manager` | `protected` ও `private` অ্যাক্সেস মডিফায়ার এবং ইনহেরিটেন্স (`super`) ব্যবহার করে অভিভাবক ও চাইল্ড ক্লাসের বাস্তবায়ন। |
| **Problem 08** | Asynchronous TypeScript & Promises | `validateAgeAsync()` | বয়স যাচাইকরণে প্রমিজ রিটার্ন করে; ১৮ বা তার বেশি হলে রেজলভ এবং কম হলে উপযুক্ত এরর মেসেজসহ রিজেক্ট করে। |

---

## 📚 তাত্ত্বিক আলোচনা (Theoretical Questions)

### ১. Type Narrowing (`type-narrowing.md`)
TypeScript-এ একাধিক সম্ভাব্য টাইপ (Union Type) থেকে শর্তসাপেক্ষে একটি নির্দিষ্ট টাইপে নেমে আসার প্রক্রিয়াকে Type Narrowing বলে। এতে বিস্তারিত ব্যাখ্যা ও উদাহরণসহ আলোচনা করা হয়েছে:
- **`typeof`**: প্রিমিটিভ ডেটা টাইপ (যেমন: `string`, `number`, `boolean`) যাচাইয়ে।
- **`instanceof`**: কোনো অবজেক্ট নির্দিষ্ট ক্লাসের ইনস্ট্যান্স কি না তা যাচাইয়ে।
- **`in`**: কোনো অবজেক্টের মধ্যে নির্দিষ্ট কোনো প্রোপার্টি বিদ্যমান কি না তা শনাক্তকরণে।

🔗 [বিস্তারিত দেখুন: type-narrowing.md](file:///d:/Next-Level-Programming-Hero/Next-Level-Software-Development-with-AI-Engineering/Assignment-01-Practice/type-narrowing.md)

---

### ২. Type Alias বনাম Interface (`type-vs-interface.md`)
TypeScript-এ ডেটার কাঠামো নির্ধারণে `type` এবং `interface` উভয়ই গুরুত্বপূর্ণ ভূমিকা পালন করে। এ ফাইলে আলোচনা করা হয়েছে:
- **Type Alias**: প্রিমিটিভ, ইউনিয়ন, ইন্টারসেকশন এবং টাপল তৈরির জন্য আদর্শ।
- **Interface**: অবজেক্ট অরিয়েন্টেড কাঠামো, `extends` দিয়ে ইনহেরিটেন্স এবং ডিক্লারেশন মার্জিং (Declaration Merging)-এর জন্য আদর্শ।
- কখন কোনটি নির্বাচন করবেন তার তুলনামূলক গাইডলাইন।

🔗 [বিস্তারিত দেখুন: type-vs-interface.md](file:///d:/Next-Level-Programming-Hero/Next-Level-Software-Development-with-AI-Engineering/Assignment-01-Practice/type-vs-interface.md)

---

## 🚀 কীভাবে রান করবেন (How to Run)

### পূর্বশর্ত (Prerequisites)
- [Node.js](https://nodejs.org/) (v16 বা তার পরবর্তী সংস্করণ ইনস্টল থাকতে হবে)
- [TypeScript](https://www.typescriptlang.org/) / [ts-node](https://www.npmjs.com/package/ts-node)

### ১. প্রজেক্ট ক্লোন বা ওপেন করুন
টার্মিনালে প্রজেক্ট ডিরেক্টরিতে যান:
```bash
cd Assignment-01-Practice
```

### ২. ডিপেন্ডেন্সি ইনস্টল (ঐচ্ছিক - গ্লোবালি না থাকলে)
যদি TypeScript বা `ts-node` ইনস্টল না থাকে:
```bash
npm install -D typescript ts-node @types/node
```

### ৩. কোড রান করুন

**পদ্ধতি ১: `ts-node` দিয়ে সরাসরি রান করতে:**
```bash
npx ts-node solutions.ts
```

**পদ্ধতি ২: TypeScript কম্পাইল করে JavaScript রান করতে:**
```bash
# TypeScript ফাইল কম্পাইল করুন
npx tsc solutions.ts

# তৈরি হওয়া JavaScript ফাইল রান করুন
node solutions.js
```

---

## 🛠️ ব্যবহৃত প্রযুক্তি (Technologies Used)
- **Language:** TypeScript
- **Runtime:** Node.js
- **Execution Tool:** ts-node / tsc
- **Paradigm:** Functional Programming, Object-Oriented Programming (OOP), Asynchronous Programming

---

## 👤 লেখক (Author)
- **কোর্স:** Next Level Software Development with AI Engineering (Programming Hero)
- **অ্যাসাইনমেন্ট:** Assignment 01 (Practice)

