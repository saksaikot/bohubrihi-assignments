# Initial assignment notes

- # 1.1 Developing A shopping Cart Using JavaScript
  - # Task for this Assignment
  - You will develop an ecommerce shopping cart where users can add or remove items from a list of products.
  - একটা ওয়েব পেইজের যেকোনো অংশে একটা প্রোডাক্ট এর লিস্ট থাকবে প্রতিটা প্রোডাক্টের সাথে দাম থাকবে আর একটা Add to Cart নামে বাটন থাকবে, প্রোডাক্ট লিস্টের নিচে বা বামে আপনি কার্ট দেখাতে পারেন, কার্ট টি শুরুতে খালি থাকবে,Add to Cart বাটনে ক্লিক করলে প্রোডাক্ট টি কার্টে যোগ হবে, প্রোডাক্ট লিস্ট থেকে প্রোডাক্ট টা যাবে না, আবার কার্টের প্রোডাক্ট গুলোর পাশে একটা Remove বাটন থাকবে, যেটা ক্লিক করলে প্রোডাক্ট টা রিমুভ হয়ে যাবে, ইমেজ দেখাতে হবে না, একটা প্রোডাক্ট একবার এড করতে পারলে হবে, কোয়ান্টিটি, মোট মূল্য দেখানো মেন্ডাটরি না, ডিজাইন ইম্পর্ট্যান্ট না, ফাংশনালিটির উপর জোর দেয়ার চেষ্টা করুন, নিচের টেবিলের ক্রাইটেরিয়া অনুযায়ী আমরা এসাইনমেন্টটি দেখবো এবং ফীডব্যাক দিবোঃ
  - Criteria Specifications
    - Error - The code is error free.
    - Multiple Products - At least 4 Products in the list.
    - Adding Product - Products can be added successfully to cart.
    - Removing Product - Products can be removed from cart.
- # 1.2 Making An Expression Validation App Using JavaScript
  - # You will make an app which will validate an expression whether it is correct or not.
  - ইউজার একটা মেনু দেখবে যেখানে দেয়া থাকবে কোন ধরনের এক্সপ্রেশন সে ভ্যালিডেট করতে চায় – Email, Phone Number, Post Code, etc. চাইলে আরো অপশন এড করতে পারেন. ইউজার অপশন টা সিলেক্ট করার একটা ইনপুট ফিল্ড দেখাবে (prompt ফাংশন), যেটা ইনপুট দিবে, সেটা ওই অপশনের regular expression এর সাথে ম্যাচ করবে. একটা switch কন্ডিশন লিখে regular expression গুলো সুইচ করতে পারেন, নিচের টেবিলের ক্রাইটেরিয়া অনুযায়ী আমরা এসাইনমেন্টটি দেখবো এবং ফীডব্যাক দিবোঃ
  - Criteria Specifications:
    - Error:The code is error free.
    - Multiple Fields: At least 3 input fields to validate
- # 1.3 Making a Number Guesser Game Using JavaScript
  - You will make a game where user has to input a number between a range. User will have 3 chances to guess the correct number.
  - আপনি কোডে দুইটা নাম্বার সেট করে দিবেন ধরেন, let low = 1; let high = 10;
  - এই রেইঞ্জের মধ্যে একটা integer নাম্বার রেন্ডম ভাবে সিলেক্ট করে correcr_ans নামে একটা ভ্যারিয়েবলে স্টোর করবেন। কিভাবে দুইটা নাম্বারের রেইঞ্জের মধ্যে থেকে একটা র‍্যান্ডম নাম্বার নিতে হয় সেটা নিচের লিংকে গেলে হেল্প পাবেন, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#:~:text=The%20Math.,scale%20to%20your%20desired%20range
  - এবার ইউজার কে বলবেন এই রেইঞ্জের মধ্যে একটা নাম্বার অনুমান করতে (prompt ফাংশন ইউজ করতে পারেন)
  - একটা লুপ ৩ বার চালিয়ে ইউজার থেকে আন্সার চাইবেন, লুপের ভিতর এভাবে কন্ডিশন লিখবেন, যদি ইউজার কারেক্ট আন্সারের চেয়ে ছোট নাম্বার ইনপুট দেয় তাহলে alert আসবে Correct answer is greater! আর বড় দিলে আসবে Correct answer is smaller! আর যদি কারেক্ট আন্সার ই দেয় তাহলে You Win দেখায়ে লুপ ব্রেক করবেন
  - ৩ বারেও কারেক্ট আন্সার দিতে না পারলে You lose! দেখাবে!
  - নিচের টেবিলের ক্রাইটেরিয়া অনুযায়ী আমরা এসাইনমেন্টটি দেখবো এবং ফীডব্যাক দিবোঃ
  - Criteria:Specifications
    - Error: The code is error free.
    - Number of Chances: Players will get 3 chances to play.
    - Giving Hint: Showing hint if the correct answer is smaller or greater
    - Showing Chances: Players can see how many chances are left.
    - Showing Result: Show the player if he Win or Lose.
    - Restart:Players can restart after the game is over.
    - Disable Field: The input field will be disabled after the game is over.

# JS assignment links

- 1.1 [Product-cart](https://saksaikot.github.io/bohubrihi-assignments/1.js/1.product%20cart/)
- 1.2 [Expression Validation](https://saksaikot.github.io/bohubrihi-assignments/1.js/2.Expression%20Validation/)
- 1.3 [Number Guesser](https://saksaikot.github.io/bohubrihi-assignments/1.js/3.Number%20Guesser%20Game/index.html)
