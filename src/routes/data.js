/**
 * @type {Announcement[]}
 */
 let announcements = [
    {
      id: "01",
      name: "Santa Monica",
      content: "12/05/1995",
      score: "1"
    },
    {
      id: "02",
      name: "Santa Monica",
      content: "12/05/1995",
      score: "5"
    },
    {
      id: "03",
      name: "Santa Monica",
      content: "12/05/1995",
      score: "2"
    },
  ];
  export function getAnnouncements() {
    return announcements;
  }
  
  /**
   * @param {score} score
   * @returns {Announcement}
   */
  export function getAnnouncement(score) {
    return announcements.find(announcement => announcement.score === score);
  }

  export function getAnnouncement(id) {
    return announcements.find(announcement => announcement.id === id);
  }
  
  /**
   * @typedef {{ id: number; name: string; score: number; content: string; }} Announcement
   */

 
  