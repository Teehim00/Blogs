// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// admin.initializeApp();

// exports.addAdminRole = functions.https.onCall((data, context) => {
//   return admin
//     .auth()
//     .getUserByEmail(data.email)
//     .then((user) => {
//       return admin.auth().setCustomUserClaims(user.uid, {
//         admin: true,
//       });
//     })
//     .then(() => {
//       return {
//         message: `Success! ${data.email} has been made an admin!!`,
//       };
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall(async (data, context) => {
  // เพิ่ม log เพื่อดูว่า data ที่รับมามีค่าหรือไม่
  console.log("Received data:", data); // log ข้อมูลทั้งหมดที่ได้รับ

  // ดึงค่า email จาก data
  const email = data?.data?.email; // ใช้ optional chaining เพื่อความปลอดภัย

  console.log("Received email:", email); // log ค่าของ email

  // ตรวจสอบว่าได้รับอีเมลหรือไม่
  if (!email) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Email is required."
    );
  }

  try {
    // เช็คว่าผู้ใช้มีอีเมลนี้หรือไม่
    const user = await admin.auth().getUserByEmail(email);

    if (user) {
      // เพิ่ม role ให้ผู้ใช้เป็น admin
      await admin.auth().setCustomUserClaims(user.uid, { admin: true });
      return { message: `User ${email} is now an admin.` };
    }
  } catch (error) {
    console.error("Error adding admin role:", error);
    throw new functions.https.HttpsError(
      "internal",
      "Failed to add admin role."
    );
  }
});
