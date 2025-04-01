<!-- <template>
  <div class="admin">
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <h2>Add Admin</h2>
        <div class="input">
          <input
            placeholder="Enter user email to make them an admin"
            type="text"
            id="addAdmins"
            v-model="adminEmail"
          />
        </div>
        <span>{{ this.functionMsg }}</span>
        <button @click="addAdmin" class="button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/functions";

export default {
  name: "Admin",
  data() {
    return {
      adminEmail: "",
      functionMsg: null,
    };
  },
  methods: {
    async addAdmin() {
      try {
        const addAdmin = await firebase
          .functions()
          .httpsCallable("addAdminRole");
        const result = await addAdmin({ email: this.adminEmail });

        // log ค่าของ result และ result.data เพื่อตรวจสอบ
        console.log("Result:", result);
        console.log("Result Data:", result.data);

        if (result && result.data && result.data.message) {
          this.functionMsg = result.data.message;
        } else {
          this.functionMsg = "ไม่สามารถเพิ่มผู้ดูแลได้";
        }
      } catch (error) {
        console.error("Error adding admin:", error);
        this.functionMsg = "เกิดข้อผิดพลาดในการเพิ่มผู้ดูแล";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }

    .admin-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 32px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;

      span {
        font-size: 14px;
      }

      .input {
        margin: 16px 0;

        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 50px;
          @media (min-width: 900px) {
          }

          &:focus {
            outline: none;
          }
        }
      }

      button {
        align-self: center;
      }
    }
  }
}
</style> -->

<template>
  <div class="admin">
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <h2>Add Admin</h2>
        <div class="input">
          <input
            placeholder="Enter user email to make them an admin"
            type="text"
            id="addAdmins"
            v-model="adminEmail"
          />
        </div>
        <span>{{ functionMsg }}</span>
        <button @click="addAdmin" class="button">Submit</button>
      </div>
    </div>
  </div>
</template>


<!-- <script>
import firebase from "firebase/app";
import "firebase/functions";
export default {
  name: "Admin",
  data() {
    return {
      adminEmail: "",
      functionMsg: null,
    };
  },
  methods: {
    async addAdmin() {
      const addAdmin = await firebase.functions().httpsCallable("addAdminRole");
      const result = await addAdmin({ email: this.adminEmail });
      this.functionMsg = result.data.message;
    },
  },
};
</script> -->


<script>
import firebase from "firebase/app";
import "firebase/functions";

export default {
  name: "Admin",
  data() {
    return {
      adminEmail: "",
      functionMsg: null,
    };
  },
  methods: {
    async addAdmin() {
      console.log("Admin email:", this.adminEmail); // ตรวจสอบค่าของ email

      if (!this.adminEmail || this.adminEmail.trim() === "") {
        this.functionMsg = "กรุณากรอกอีเมล";
        return;
      }

      // ตรวจสอบรูปแบบของอีเมลด้วย regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.adminEmail)) {
        this.functionMsg = "รูปแบบอีเมลไม่ถูกต้อง";
        return;
      }

      try {
        const addAdmin = await firebase
          .functions()
          .httpsCallable("addAdminRole");
        console.log(
          "Calling addAdminRole function with email:",
          this.adminEmail
        ); // ตรวจสอบค่าก่อนส่ง

        const result = await addAdmin({ email: this.adminEmail }); // ตรวจสอบการส่งค่าในรูปแบบที่ถูกต้อง
        console.log("Result:", result);

        if (result && result.data && result.data.message) {
          this.functionMsg = result.data.message;
        } else {
          this.functionMsg = "ไม่สามารถเพิ่มผู้ดูแลได้";
        }
      } catch (error) {
        console.error("Error adding admin:", error);
        if (error.message.includes("invalid-argument")) {
          this.functionMsg = "รูปแบบอีเมลไม่ถูกต้อง";
        } else if (error.message.includes("auth/invalid-email")) {
          this.functionMsg = "อีเมลไม่ถูกต้อง";
        } else {
          this.functionMsg = "เกิดข้อผิดพลาดในการเพิ่มผู้ดูแล";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }

    .admin-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 32px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;

      span {
        font-size: 14px;
      }

      .input {
        margin: 16px 0;

        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 50px;
          @media (min-width: 900px) {
          }

          &:focus {
            outline: none;
          }
        }
      }

      button {
        align-self: center;
      }
    }
  }
}
</style>
