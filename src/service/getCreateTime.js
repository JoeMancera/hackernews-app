export default function getCreatedTime({ created_at }){
  const now = new Date()
  const createdDate = new Date(created_at);
  const wasCreated = (now.getTime() - createdDate.getTime()) / 1000 / 60 /60

  if(wasCreated < 1 ){
    return 'A few minutes ago'
  }
  else if(wasCreated > 1 && wasCreated < 24){
    return `${Math.floor(wasCreated)} hours ago`
  }
  else if(wasCreated > 24 && wasCreated < 48){
    return 'Yesterday'
  }
  else {
    return `${Math.floor(wasCreated / 24)} days ago`
  }
}