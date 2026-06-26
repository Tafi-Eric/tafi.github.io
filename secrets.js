/* ───────────────────────────────────────────────────────────────
   secrets.js — your encrypted content lives here (only ciphertext).
   Generate new blobs with eina.html, then paste the lines below.

   DEMO passwords (CHANGE THESE — re-encrypt your own with eina.html):
     master = "tafi"   ·   diari = "diari"   ·   projectes = "projectes"   ·   llibres = "llibres"

   Each blob opens with its section password OR the master password.
   ─────────────────────────────────────────────────────────────── */
window.TAFI_SECRETS = {
  // Locked journal entries — appear in Diari
  entries: [
    { id:"j-demo", date:"2026 · 04 · 02", blob:{"v":1,"enc":{"iv":"/q2yiHbOgijolw5q","ct":"U6rGx89LCIl2Bha/ierGb2e9vvR/Kwpxp1di8VyF6xOSTWNrE6vhSy3WMFUPHRTuoP/2IxDQT7s0J12z13dcEuZ9dPTAF/+k1VzS6sivmRH6k9StxlB/ijO9odiBNRXy4MREewoeKYWD805whnOaihWJ2IeHf2lT5cEJWKp3DDcFtrGVe6jNh4KgiwKx3kRq6lHp2hr3HAl+3D8T1k5bMmeoZ6LFlNheIpB4QYQgAPio4BycFQAkxxioUqn9+UMmWa+5QyRdsuCoJj0wYS9PK9bZtzeaFkSoBx9wMLgbFvJjbHQxXVXyMvu3cK1/DSv8F4qThMoxFm48iN0kdBqxVipl8su1U8WVUy4Ln/KmmUuA2d+ftsx0v46HjBiZ3Ly8/dqO8BJRoYFKphS/tdea8ypNRL3z5fqxYmR3NjgZ1Q=="},"wraps":[{"salt":"k0GmDphISkYO5HWKpjKpJA==","iv":"l4uuop3+3q58ZkkP","ct":"+ABFWgn91fxUKZPtgoDiS8I8znPZLo9b65xGeUPVVHOYlMq7Z7H2B+BNqg9qZE8x"},{"salt":"Y5KxR0PQgSFZkezdvw/cvg==","iv":"JQWNWULJ3wieUeQY","ct":"7DUjcSno3bISUEGE342URj5ky/R3cduN/z9Brudp5V58Tl1QPQd13JNXmUHWrUSm"}]} }
  ],
  // Locked projects — appear in Projectes
  projects: [
    { id:"p-demo", blob:{"v":1,"enc":{"iv":"EtY8K/TJgNJsGzMW","ct":"9zBNMIqEpDi7frqUOKbA/Tl9KphbolFELIuTw9+8CC9txTeUVQH4NOzOOuWOmhrM0lZVXbBdI+VC/3il6c4IHj/wgLUuUVOrcGJmt4ZS9SgEeD+VTPVj8KoWVnMZYQ+cUZCXh+s3LkVt77OPmbz3Vo9F9a74OYjkMHpJ+QRy23P4wElgeDAlxfdVBLN8CTt9H63rzU6sqj2Dk3XTGtMFPASnyvMty4zOeXJ9wkp2gsCLuY3P83oDsTKekPY5f1YWlw5xzOJ9W62K9By0UQ4/90+F3iP+qPVi7pUbHFCJKRwYLH+dDZdhtBQVP+wJYZMHyb7C8hnbgslKd+CZygpc4syZkKoF1Gi89rKj0TbStk0HRc5QcIhbXky9Q1z5l6kfpJzqySOdG8xMKSff6COzrS65M8LDHEecJw=="},"wraps":[{"salt":"rYRk1jeUWeOK81t6tECmdg==","iv":"Usr7evUDb+6Ez953","ct":"ZMoazYhQrZIIKC7AsGkPzn0nIbbNk1viVnYA0Ht1mCtXcX9yr4j45iZsuUgXqGjG"},{"salt":"v7yYroYnX7vcSoYUP7zw7Q==","iv":"rXPcIp71mKCXuy6B","ct":"HepYUJ/nF+7PbqLm1b7JYrIYUzedtOoHD6gFxYPHWbpfN7sipbN/VfDglSOzKErU"}]} }
  ],
  // Locked "star" books — appear in Llibres
  books: [
    { id:"b-demo", blob:{"v":1,"enc":{"iv":"rGgGuP/ziAEnFgw5","ct":"VwmPwZrudYaTD2a2w8iiswZ57PXVkaSoAVi6OBlPZMVK5zcYmpwOKeWclt6c5KP7eYEpl4Zt2uFQqfLuclHyxsogI3RNL+kV0wkPPaAwK/qTfT5ZK4fubilhcFsvrpIELaTlxnZjE36M/xks2dIG58o66NvCdzBkMrPyK8UVZekiRCsyk7s="},"wraps":[{"salt":"dkxb7LkoUc6kxIFzQG/5cg==","iv":"MQyBwtL1jFO0u66p","ct":"a2NjiMOFkNZMQHvV0Bj9AfYynLwMVjbzLXgasVa961lIEFbNGVXI6Nx9mC8dbakX"},{"salt":"bMljZ0kntW2DItR9xLKPRg==","iv":"tZZ2sETqiXouvmAz","ct":"s+EpmlXcIRFryomX+YzZCUqyotGBHXtXo2MlULILptp1VbMtrPyX0d7P/lwTSWrR"}]} }
  ]
};