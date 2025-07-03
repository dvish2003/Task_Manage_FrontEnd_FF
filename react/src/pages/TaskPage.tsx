import { useState } from "react";
import type { Task } from "../model/Task.ts";
import type { User } from "../model/User.ts";
import { getUser } from "../service/userService.ts";
import { addTask } from "../service/taskService.ts";

export default function TaskPage() {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const validateForm = (): boolean => {
    const errors: string[] = [];

    if (!taskName.trim()) {
      errors.push("Task Name is required");
    } else if (taskName.trim().length < 2) {
      errors.push("Task Name must be at least 2 characters");
    }

    if (!taskDescription.trim()) {
      errors.push("Task Description is required");
    } else if (taskDescription.trim().length < 5) {
      errors.push("Task Description must be at least 5 characters");
    }

    if (!userId.trim()) {
      errors.push("User ID is required");
    }

    if (!userName.trim()) {
      errors.push("User Name is required");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fetchedUserId = await getUserId(userName);
    if (!fetchedUserId) {
      alert("User not found");
      return;
    }

    setUserId(fetchedUserId);

    if (validateForm()) {
      const newTask: Task = {
        id,
        taskName,
        taskDescription,
        userId: fetchedUserId,
        userName,
      };

      const response = await addTask(newTask);
      if (response) {
        console.log("Task added successfully:", response);
        setId("");
        setTaskName("");
        setTaskDescription("");
        setUserId("");
        setUserName("");
      }
    }
  };

  const getUserId = async (userName: string): Promise<string | null> => {
    const user: User = {
      _id: "",
      name: "",
      email: userName,
      password: "",
    };

    const response = await getUser(user);
    return response ? response._id : null;
  };

  return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="mb-4 text-end">
              <button className="btn btn-outline-primary" onClick={toggleForm}>
                {showForm ? "Hide Task Form" : "Add New Task"}
              </button>
            </div>

            {showForm && (
                <div className="card shadow mb-5">
                  <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Task Management</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="taskId" className="form-label">Task ID</label>
                        <input
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            readOnly
                            type="text"
                            className="form-control"
                            id="taskId"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="taskName" className="form-label">Task Name</label>
                        <input
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            className="form-control"
                            id="taskName"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="taskDescription" className="form-label">Task Description</label>
                        <textarea
                            className="form-control"
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            id="taskDescription"
                            rows={3}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="userId" className="form-label">User ID</label>
                        <input
                            type="text"
                            value={userId}
                            readOnly
                            className="form-control"
                            id="userId"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="userName" className="form-label">User Name</label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="form-control"
                            id="userName"
                        />
                      </div>
                      <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-success">Add</button>
                        <button type="button" className="btn btn-warning">Update</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                      </div>
                    </form>
                  </div>
                </div>
            )}

            <div className="card shadow">
              <div className="card-header bg-dark text-white">
                <h5 className="mb-0">Task List</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead className="table-light">
                    <tr>
                      <th>Task ID</th>
                      <th>Task Name</th>
                      <th>Description</th>
                      <th>User ID</th>
                      <th>User Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>Sample Task</td>
                      <td>Sample Description</td>
                      <td>101</td>
                      <td>Jane Doe</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}
