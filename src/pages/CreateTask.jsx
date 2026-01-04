const CreateTask = () => {
  return (
    <div className="mt-6 rounded-xl bg-slate-800/60 border border-slate-700 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-slate-100">Create task</h3>
          <p className="text-sm text-slate-400">Add a new task for your team — quick and simple.</p>
        </div>
        <div className="text-sm text-slate-400">Template: <span className="text-emerald-400">Standard</span></div>
      </div>

      <form className="mt-5 grid grid-cols-1 gap-4">
        <div>
          <label className="text-sm text-slate-300 mb-1 block">Title</label>
          <input className="w-full px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="e.g. Prepare monthly report" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-300 mb-1 block">Assignee</label>
            <input className="w-full px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="e.g. Maya" />
          </div>

          <div>
            <label className="text-sm text-slate-300 mb-1 block">Due date</label>
            <input className="w-full px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="e.g. Jan 12" />
          </div>
        </div>

        <div>
          <label className="text-sm text-slate-300 mb-1 block">Details</label>
          <textarea rows={4} className="w-full px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Optional details about the task (notes, steps, links)" />
        </div>

        <div className="flex items-center justify-end gap-3">
          <button type="button" className="py-2 px-4 rounded-lg border border-slate-700 hover:bg-slate-700 text-slate-100">Cancel</button>
          <button type="button" className="py-2 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-medium">Create task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
