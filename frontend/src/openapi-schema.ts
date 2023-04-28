/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/": {
    /** Root */
    get: operations["root__get"];
  };
  "/api/v1/documents/": {
    /** List Documents */
    get: operations["list_documents_api_v1_documents__get"];
    /** Create Document */
    post: operations["create_document_api_v1_documents__post"];
  };
  "/api/v1/documents/{document_id}/": {
    /** Get Document */
    get: operations["get_document_api_v1_documents__document_id___get"];
  };
  "/api/v1/documents/{document_id}/tasks/": {
    /** Get Document Tasks */
    get: operations["get_document_tasks_api_v1_documents__document_id__tasks__get"];
  };
  "/api/v1/tasks/": {
    /** List Tasks */
    get: operations["list_tasks_api_v1_tasks__get"];
    /** Create Task */
    post: operations["create_task_api_v1_tasks__post"];
  };
  "/api/v1/tasks/claim_unassigned_task/": {
    /** Claim Unassigned Task */
    post: operations["claim_unassigned_task_api_v1_tasks_claim_unassigned_task__post"];
  };
  "/api/v1/tasks/{task_id}/keepalive/": {
    /** Keepalive */
    post: operations["keepalive_api_v1_tasks__task_id__keepalive__post"];
  };
  "/api/v1/tasks/{task_id}/mark_completed/": {
    /** Mark Completed */
    post: operations["mark_completed_api_v1_tasks__task_id__mark_completed__post"];
  };
  "/api/v1/users/create/": {
    /** Create User Req */
    post: operations["create_user_req_api_v1_users_create__post"];
  };
  "/api/v1/users/login/": {
    /** Login */
    post: operations["login_api_v1_users_login__post"];
  };
  "/api/v1/users/me/": {
    /** Read User */
    get: operations["read_user_api_v1_users_me__get"];
  };
  "/media/{file}": {
    /** Serve Media */
    get: operations["serve_media_media__file__get"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** AlignTask */
    AlignTask: {
      /**
       * Document Id
       * Format: uuid
       */
      document_id: string;
      /** Task Parameters */
      task_parameters: Record<string, never>;
      /**
       * Task Type
       * @default ALIGN
       * @enum {string}
       */
      task_type?: "ALIGN";
    };
    /** AssignedTaskResponse */
    AssignedTaskResponse: {
      /**
       * Assigned At
       * Format: date-time
       */
      assigned_at?: string;
      assigned_worker: components["schemas"]["WorkerBase"];
      /**
       * Completed At
       * Format: date-time
       */
      completed_at?: string;
      /** Dependencies */
      dependencies: (components["schemas"]["TaskResponse"])[];
      document: components["schemas"]["Document"];
      /**
       * Document Id
       * Format: uuid
       */
      document_id: string;
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Is Completed */
      is_completed: boolean;
      /**
       * Last Keepalive
       * Format: date-time
       */
      last_keepalive: string;
      /** Progress */
      progress?: number;
      /** Task Parameters */
      task_parameters: Record<string, never>;
      task_type: components["schemas"]["TaskType"];
    };
    /** Body_create_document_api_v1_documents__post */
    Body_create_document_api_v1_documents__post: {
      /**
       * File
       * Format: binary
       */
      file: string;
      /** Name */
      name: string;
    };
    /** CreateUser */
    CreateUser: {
      /** Password */
      password: string;
      /** Username */
      username: string;
    };
    /** DiarizeTask */
    DiarizeTask: {
      /**
       * Document Id
       * Format: uuid
       */
      document_id: string;
      /** Task Parameters */
      task_parameters: Record<string, never>;
      /**
       * Task Type
       * @default DIARIZE
       * @enum {string}
       */
      task_type?: "DIARIZE";
    };
    /** Document */
    Document: {
      /** Changed At */
      changed_at: string;
      /** Created At */
      created_at: string;
      /** Id */
      id: string;
      /** Media Files */
      media_files: (components["schemas"]["DocumentMedia"])[];
      /** Name */
      name: string;
    };
    /** DocumentMedia */
    DocumentMedia: {
      /** Content Type */
      content_type: string;
      /** Tags */
      tags: (string)[];
      /** Url */
      url: string;
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: (components["schemas"]["ValidationError"])[];
    };
    /** KeepaliveBody */
    KeepaliveBody: {
      /** Progress */
      progress?: number;
    };
    /** LoginResponse */
    LoginResponse: {
      /** Token */
      token: string;
    };
    /** TaskResponse */
    TaskResponse: {
      /**
       * Assigned At
       * Format: date-time
       */
      assigned_at?: string;
      /**
       * Completed At
       * Format: date-time
       */
      completed_at?: string;
      /** Dependencies */
      dependencies: (components["schemas"]["TaskResponse"])[];
      document: components["schemas"]["Document"];
      /**
       * Document Id
       * Format: uuid
       */
      document_id: string;
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Is Completed */
      is_completed: boolean;
      /** Progress */
      progress?: number;
      /** Task Parameters */
      task_parameters: Record<string, never>;
      task_type: components["schemas"]["TaskType"];
    };
    /**
     * TaskType
     * @description An enumeration.
     * @enum {string}
     */
    TaskType: "DIARIZE" | "TRANSCRIBE" | "ALIGN";
    /** TranscribeTask */
    TranscribeTask: {
      /**
       * Document Id
       * Format: uuid
       */
      document_id: string;
      task_parameters: components["schemas"]["TranscribeTaskParameters"];
      /**
       * Task Type
       * @default TRANSCRIBE
       * @enum {string}
       */
      task_type?: "TRANSCRIBE";
    };
    /** TranscribeTaskParameters */
    TranscribeTaskParameters: {
      /** Lang */
      lang: string;
      /** Model */
      model: string;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (string | number)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
    /** WorkerBase */
    WorkerBase: {
      /**
       * Last Seen
       * Format: date-time
       */
      last_seen?: string;
      /** Name */
      name: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /** Root */
  root__get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": Record<string, never>;
        };
      };
    };
  };
  /** List Documents */
  list_documents_api_v1_documents__get: {
    parameters: {
      header: {
        authorization: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": (components["schemas"]["Document"])[];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Create Document */
  create_document_api_v1_documents__post: {
    parameters: {
      header: {
        authorization: string;
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["Body_create_document_api_v1_documents__post"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Document"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Get Document */
  get_document_api_v1_documents__document_id___get: {
    parameters: {
      header: {
        authorization: string;
      };
      path: {
        document_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Document"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Get Document Tasks */
  get_document_tasks_api_v1_documents__document_id__tasks__get: {
    parameters: {
      header: {
        authorization: string;
      };
      path: {
        document_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": (components["schemas"]["TaskResponse"])[];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** List Tasks */
  list_tasks_api_v1_tasks__get: {
    parameters: {
      header: {
        authorization: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": (components["schemas"]["TaskResponse"])[];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Create Task */
  create_task_api_v1_tasks__post: {
    parameters: {
      header: {
        authorization: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["DiarizeTask"] | components["schemas"]["TranscribeTask"] | components["schemas"]["AlignTask"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["TaskResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Claim Unassigned Task */
  claim_unassigned_task_api_v1_tasks_claim_unassigned_task__post: {
    parameters: {
      query: {
        task_type: (components["schemas"]["TaskType"])[];
      };
      header: {
        authorization: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["AssignedTaskResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Keepalive */
  keepalive_api_v1_tasks__task_id__keepalive__post: {
    parameters: {
      header: {
        authorization: string;
      };
      path: {
        task_id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["KeepaliveBody"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["AssignedTaskResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Mark Completed */
  mark_completed_api_v1_tasks__task_id__mark_completed__post: {
    parameters: {
      header: {
        authorization: string;
      };
      path: {
        task_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["AssignedTaskResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Create User Req */
  create_user_req_api_v1_users_create__post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateUser"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": Record<string, never>;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Login */
  login_api_v1_users_login__post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateUser"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["LoginResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Read User */
  read_user_api_v1_users_me__get: {
    parameters: {
      header: {
        authorization: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": Record<string, never>;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Serve Media */
  serve_media_media__file__get: {
    parameters: {
      query: {
        "X-Transcribee-Signature": string;
      };
      path: {
        file: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": Record<string, never>;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
}
