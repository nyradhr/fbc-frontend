/**
 * @type {Announcement[]}
 */
 let announcements = [
    {
      id: "01",
      title: "Avellino - Roma",
      content: "Rimpiazziamo la Lazio per il derby!",
      score: "56"
    },
    {
      id: "02",
      title: "Avellino in Coppa Uefa!",
      content: "Complimenti a tutti!",
      score: "213123124"
    },
    {
      id: "03",
      title: "Avellino compra Ronaldo!",
      content: "Incredibilie!!!!",
      score: "1231231"
    },
  ];
  export function getAnnouncements() {
    return announcements;
  }

  /**
   * @param {id} id
   * @returns {Announcement}
   */

  export function getAnnouncement(idparam) {
    return announcements.find((announcement) => announcement.id === idparam);
  }
  
  /**
   * @typedef {{ id: number; title: string; score: number; content: string; }} Announcement
   */

 
  