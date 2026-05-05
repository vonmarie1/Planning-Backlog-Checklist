# Risk Register

| Risk                                         | Likelihood (1–5) | Impact (1–5) | Score | Mitigation                                         | Owner              |
| -------------------------------------------- | ---------------- | ------------ | ----- | -------------------------------------------------- | ------------------ |
| Server downtime or backend crash             | 3                | 5            | 15    | Add error handling and restart mechanism           | Backend Developer  |
| Chat messages not syncing in real-time       | 4                | 5            | 20    | Use stable WebSocket implementation and testing    | Backend Developer  |
| UI not responsive on different devices       | 3                | 4            | 12    | Use responsive design and test on multiple screens | Frontend Developer |
| Users not matched properly in queue          | 3                | 5            | 15    | Improve queue logic and test edge cases            | Backend Developer  |
| Data loss when users disconnect              | 2                | 5            | 10    | Save session state temporarily                     | Backend Developer  |
| Poor user experience due to slow performance | 3                | 4            | 12    | Optimize backend and reduce unnecessary calls      | Full Stack Lead    |
| Bugs not detected before submission          | 4                | 4            | 16    | Conduct QA testing every sprint                    | QA Tester          |
| Git merge conflicts in team workflow         | 4                | 3            | 12    | Use feature branches and pull requests properly    | Git Manager        |

Unauthorized access due to weak authentication | 3 | 5 | 15 | Implement stronger authentication | Backend Dev
Exposure of sensitive data | 2 | 5 | 10 | Use environment variables | Backend Dev
Injection attacks from user input | 3 | 4 | 12 | Validate and sanitize inputs | Backend Dev