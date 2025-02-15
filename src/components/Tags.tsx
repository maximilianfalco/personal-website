const Tags = ({ text } : { text : string}) => {
  return (
    <div className="font-JetBrainsMono text-[10px] bg-slate-100 px-2 py-1 rounded-full dark:text-slate-100 dark:bg-slate-600">
      {text}
    </div>
  )
}

export default Tags