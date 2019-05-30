const messages = {
  fr: {
    'Back': 'Retour',
    'Cancel': 'Annuler',
    'Confirm': 'Confirmer',
    'Delete': 'Supprimer',
    'Create': 'Créer',
    'Update': 'Mettre à jour',
    'Canvas': 'Canevas',
    'Weather': 'Météo',
    'Description': 'Description',
    'Deletion is permanent': 'La suppression est définitive',
    'Properties': 'Propriétés',
    'Notes': 'Notes',
    'Resources': 'Ressources',
    'List': 'Liste',
    'Completed on': 'Terminée le',
    'Created by': 'Créée par',
    "Convert element to task?": "Transformer en tâche ?",
    "Delete element?": "Supprimer l'élément ?",
    "Convert": "Convertir",
    "Email notifications": "Notifications par mail",
    "Dashboard": "Tableau de bord",
    "Tasks": "Tâches",
    "No task": "Aucune tâche",
    "Delete list?": "Supprimer la liste ?",
    "Organizations": "Organisations",
    "Tasks": "Tâches",
    "Projects": "Projets",
    "Settings": "Paramètres",
    "Clone": "Dupliquer",
    "Project cloned successfully": "Projet dupliqué avec succès",
    "New project": "Nouveau projet",
    "New organization": "Nouvelle organisation",
    "Create new organization": "Créer une nouvelle organisation",
    "New label": "Nouveau label",
    "Add new task": "Ajouter une tâche",
    "Assigned to": "Assignées à",
    "others": "autres",
    "No user assigned": "Aucun utilisateur assigné",
    "No label available": "Aucun label disponible",
    "Updated by": "Modifiées par",
    "No user found": "Aucun utilisateur",
    "Delete organization?": "Supprimer l'organisation ?",
    "Organization deleted": "Organisation supprimée",
    "Add to favorites": "Ajouter aux favoris",
    "Remove from favorites": "Retirer des favoris",
    "Project added to favorites": "Projet ajouté aux favoris",
    "Project removed from favorites": "Projet retiré des favoris",
    "No favorite": "Aucun favori",
    "All": "Tous",
    "Favorites": "Favoris",
    "Delete attachment?": "Supprimer la pièce jointe ?",
    "Individuals": "Sans organisation",
    "Organizations & Projects": "Organisations & Projets",
    "Late": "En retard",
    "Assigned to me": "Assignées à moi",
    "Recents": "Récentes",
    "Access forbidden": "Accès interdit",
    "Trashcan": "Corbeille",
    "Delete project?": "Supprimer le projet ?",
    "No project": "Aucun projet",
    "Project deleted": "Projet supprimé",
    "Move to trash": "Placer dans la corbeille",
    "Close": "Fermer",
    "Do you really want to delete this task?": "Voulez-vous vraiment supprimer cette tâche ?",
    history: {
      tasks: {
        create: "Création",
        updateName: "Modification du nom",
        updateDescription: "Modification de la description",
        addLabel: "Ajout d'un label",
        removeLabel: "Suppresion d'un label",
        addChecklistItem: "Ajout d'un item",
        removeChecklistItem: "Suppression d'un item",
        toggleCheckItem: "Modification d'un item",
        convertItemToTask: "Conversion d'un item en tache",
        move: "Déplacement",
        addAttachment: "Ajout d'une pièce jointe",
        removeAttachment: "Suppression d'un pièce jointe",
        remove: "Suppression",
        setDueDate: "Date d'échéance",
        complete: "Complétée",
        addNote: "Ajout d'une note",
        removeNote: "Suppression d'une note",
        updateNote: "Modification d'une note",
        assignTo: "Assignée",
        updateEstimation: {
          size: "Modification de l'estimation",
          spent: "Modification de la durée passée"
        }
      },
    },
    projects: {
      state: {
        PLANNED: 'Planifié',
        DEVELOPMENT: 'En développement',
        PRODUCTION: 'En production',
        ARCHIVED: 'Archivé'
      }
    },
    dates: {
      locale: "fr",
      format: {
        date: "DD/MM/YYYY",
        dateTime: "DD/MM/YYYY HH:mm",
      },
      duration: {
        past: 'il y a {duration}',
        future: 'dans {duration}',
      }
    }
  },
  en: {
    'Back': 'Back',
    'Cancel': 'Cancel',
    'Confirm': 'Confirm',
    'Delete': 'Delete',
    'Create': 'Create',
    'Update': 'Update',
    'Canvas': 'Canvas',
    'Weather': 'Weather',
    'Description': 'Description',
    'Deletion is permanent': 'Deletion is permanent',
    'Properties': 'Properties',
    'Notes': 'Notes',
    'Resources': 'Resources',
    'List': 'List',
    'Completed on': 'Completed on',
    'Created by': 'Created by',
    "Convert element to task?": "Convert element to task?",
    "Delete element?": "Delete element?",
    "Convert": "Convert",
    "Email notifications": "Email notifications",
    "Dashboard": "Dashboard",
    "Tasks": "Tasks",
    "No task": "No task",
    "Delete list?": "Delete list?",
    "Organizations": "Organizations",
    "Tasks": "Tasks",
    "Projects": "Projects",
    "Settings": "Settings",
    "Clone": "Clone",
    "Project cloned successfully": "Project cloned successfully",
    "New project": "New project",
    "New organization": "New organization",
    "Create new organization": "Create new organization",
    "New label": "New label",
    "Add new task": "Add new task",
    "Assigned to": "Assigned to",
    "others": "others",
    "No user assigned": "No user assigned",
    "No label available": "No label available",
    "Updated by": "Updated by",
    "No user found": "No user found",
    "Delete organization?": "Delete organization?",
    "Organization deleted": "Organization deleted",
    "Add to favorites": "Add to favorites",
    "Remove from favorites": "Remove from favorites",
    "Project added to favorites": "Project added to favorites",
    "Project removed from favorites": "Project removed from favorites",
    "All": "All",
    "Favorites": "Favorites",
    "No favorite": "No favorite",
    "Delete attachment?": "Delete attachment?",
    "Individuals": "Individuals",
    "Organizations & Projects": "Organizations & Projects",
    "Late": "Late",
    "Assigned to me": "Assigned to me",
    "Recents": "Recents",
    "Access forbidden": "Access forbidden",
    "Trashcan": "Trashcan",
    "Delete project?": "Delete project?",    
    "No project": "No project",
    "Project deleted": "Project deleted",
    "Move to trash": "Move to trash",
    "Close": "Close",
    "Do you really want to delete this task?": "Do you really want to delete this task?",
    history: {
      tasks: {
        create: "Creation",
        updateName: "Update name",
        updateDescription: "Update description",
        addLabel: "Add label",
        removeLabel: "Remove label",
        addChecklistItem: "Add item",
        removeChecklistItem: "Delete item",
        toggleCheckItem: "Update item",
        convertItemToTask: "Convert item totask",
        move: "Move",
        addAttachment: "Add attachment",
        removeAttachment: "Delete attachment",
        remove: "Delete",
        setDueDate: "Due date",
        complete: "Completed",
        addNote: "Add note",
        removeNote: "Remove note",
        updateNote: "Update note",
        assignTo: "Assigned to",
        updateEstimation: {
          size: "Update estimation size",
          spent: "Update spent time on task"
        }
      }
    },
    projects: {
      state: {
        PLANNED: 'Planned',
        DEVELOPMENT: 'Development',
        PRODUCTION: 'Production',
        ARCHIVED: 'Archived'
      }
    },
    dates: {
      locale: "en",
      format: {
        date: "MM/DD/YYYY",
        dateTime: "MM/DD/YYYY HH:mm",
      },
      duration: {
        past: '{duration} ago',
        future: 'in {duration}',
      }
    }
  }
};

export default messages;
