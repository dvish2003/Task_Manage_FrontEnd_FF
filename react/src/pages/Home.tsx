export default function Home() {
    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="mb-0">Task Manager</h1>
                <button className="btn btn-primary">
                    <i className="bi bi-plus-circle me-2"></i>Add Task
                </button>
            </div>

            <div className="card shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="table-light">
                            <tr>
                                <th scope="col" style={{width: '100px'}}>Task ID</th>
                                <th scope="col">Title</th>
                                <th scope="col" style={{width: '120px'}}>Status</th>
                                <th scope="col" style={{width: '120px'}}>Priority</th>
                                <th scope="col" style={{width: '120px'}}>Due Date</th>
                                <th scope="col" style={{width: '150px'}}>Assignee</th>
                                <th scope="col" style={{width: '100px'}}>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}