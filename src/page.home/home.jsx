const debug = require("debug")("mutant:HomePage")

import React, { useState } from "react"
import { reduce } from "@asd14/m"

import { DiagramSection } from "./section.diagram/diagram"

import "./home.module.css"

export const HomePage = () => {
  const itineraries = {
    activities: {
      id: "string",
      title: "string",
      description: "string",
    },

    itineraries: {
      id: "string",
      title: "string",
      description: "string",
      type: {
        type: "string",
        values: ["calendar-weekday", "calendar-datetime", "sequence"],
      },
      isPublished: "bool",
      Activities: {
        type: "array",
        verb: "1:n | contains",
        items: {
          id: "string",
          position: "number",
        },
      },
    },

    seniors: {
      id: "string",
      userName: "string",
      Itineraries: {
        type: "array",
        verb: "1:n | subscribedTo",
        items: {
          id: "string",
          runId: "string",
        },
      },
      ItineraryRuns: {
        type: "array",
        verb: "1:n | watched",
        items: {
          id: "string",
          itineraryId: "string",
          startedAt: "integer",
          Activities: {
            type: "array",
            verb: "1:n | contains",
          },
        },
      },
    },
  }

  const a2 = {
    permissions: {
      id: "string",
      whoId: "string",
      action: {
        type: "string",
        values: ["CREATE", "READ", "UPDATE", "DELETE"],
      },
      whatId: "string",
    },
  }

  const conversations = {
    scripts: {
      id: "string",
      title: "string",
      createdAt: "number",
      updatedAt: "number",

      Questions: {
        type: "array",
        items: {
          id: "string",
          value: "string",
          position: "number",
        },
      },

      Options: {
        type: "array",
        items: {
          id: "string",
          questionId: "string",
          value: "string",
          position: "number",
        },
      },
    },

    conversations: {
      id: "string",
      userId: "string",
      scriptId: "string",
      createdAt: "number",
      updatedAt: "number",

      Answers: {
        type: "array",
        items: {
          questionId: "string",
          optionId: "string",
        },
      },
    },

    // notifications: {
    //   id: "string",
    //   userId: "string",
    //   text: "string",
    //   type: {
    //     type: "string",
    //     values: ["script", "activity"],
    //   },
    //   createdAt: "number",
    //   readAt: "number",

    //   data: {
    //     type: "object",
    //     items: {
    //       scriptId: "string",
    //       conversationId: "string",
    //     },
    //   },
    // },
  }

  const evolutionaryModel = {
    "Software concept": {},
    "Preliminary Requirement Analysys": {},
    "Design of Architecture and system core": {},
    "Develop a version": {},
  }

  const [coordinates, setCoordinates] = useState({
    seniors: [254, 323],
    itineraries: [622, 133],
    activities: [747, 436],
  })

  return (
    <div className="gruvbox-dark" style={{ height: "100vh" }}>
      <DiagramSection
        schema={conversations}
        coordinates={coordinates}
        // onChange={({ nodes = [], links }) => {
        //   debug({ links })

        //   setCoordinates(
        //     reduce(
        //       (acc, item) => ({
        //         ...acc,
        //         [item.id]: item.coordinates,
        //       }),
        //       {},
        //       nodes
        //     )
        //   )
        // }}
      />
    </div>
  )
}
