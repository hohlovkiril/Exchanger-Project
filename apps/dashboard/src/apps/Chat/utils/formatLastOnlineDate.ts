export default function formatLastOnlineDate(date: Date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes <= 15) {
    return 'Online';
  } else if (diffInMinutes > 15 && diffInMinutes < 60) {
    return `Active ${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  } else if (diffInHours < 24) {
    return `Active ${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else if (diffInDays === 1) {
    return 'Active Yesterday ago';
  } else if (diffInDays < 7) {
    return `Active ${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
       year: 'numeric', month: 'numeric', day: 'numeric'
    });

    return `Active ${formattedDate} last time`;
  }
}