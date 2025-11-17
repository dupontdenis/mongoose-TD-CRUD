# 🎓 Mongoose Virtual & Method Mini Demo

Minimal teaching project to show two core Mongoose schema features:

1. A **virtual property** `url` (computed, not stored in MongoDB)
2. An **instance method** `getSummary(maxLength)` (logic with parameters)

The UI is intentionally tiny:

# 🚀 Quick Start

```bash
# Install dependencies
npm install

# (Optional) ensure MongoDB is running locally on default port
# Seed two educational posts
npm run populate

# Start the server
npm run start
```

Open: `http://localhost:3000/`

- ✅ Use regular functions (not arrow functions)
- ✅ Have access to `this` (the document)
- ✅ Keep your code DRY (Don't Repeat Yourself)
- ✅ Make models smarter and controllers cleaner

---

**Happy Learning! 🚀**
