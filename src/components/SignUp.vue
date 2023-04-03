<template>
    <form action="">
        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Password:</label>
        <input type="password" required v-model="password">

        <label>Role:</label>
        <select v-model="role">
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
        </select>

        <label>Skills:</label>
        <!-- keyboard event. modified by alt key -->
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
        <div v-for="skill in skills" :key="skill" class="pill">
            <p>{{ skill }}</p>
        </div>


        <!-- Checkbox - Boolean  -->
        <div class="terms">
            <input type="checkbox" required v-model="terms">
            <label> Accept Terms and Conditions </label>
        </div>
        <!-- Checkbox - Array -->
        <!-- <div>
            <input type="checkbox" value="Luffy" v-model="names">
            <label>Luffy</label>
        </div>
        <div>
            <input type="checkbox" value="Zoro" v-model="names">
            <label>Zoro</label>
        </div>
        <div>
            <input type="checkbox" value="Sanji" v-model="names">
            <label>Sanji</label>
        </div> -->
    </form>
    <div class="test-area">
        <p>Email: {{ email }}</p>
        <p>Password: {{ password }}</p>
        <p>Role: {{ role }}</p>
        <p>Terms: {{ terms }}</p>
        <!-- <p>Checked: {{ names }}</p> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            // names: []
            tempSkill: '',
            skills: []
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === ',' && this.tempSkill) {
                // check for duplicates added to temp
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }

                this.tempSkill = ''
            }
        }
    }
}
</script>

<style>
.test-area {
    background: white;
    margin: 20px auto;
    padding: 10px 5px;
    max-width: 300px;
    border-radius: 20px;
}

form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
</style>