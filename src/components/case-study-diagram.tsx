"use client";

import { useEffect, useMemo, useState } from "react";
import ReactFlow, { Background, MarkerType } from "reactflow";

type DiagramNode = {
  title: string;
  subtitle: string;
};

type CaseStudyDiagramProps = {
  nodes: DiagramNode[];
};

const CaseStudyDiagram = ({ nodes }: CaseStudyDiagramProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const sync = () => setIsMobile(media.matches);
    sync();

    if (media.addEventListener) {
      media.addEventListener("change", sync);
      return () => media.removeEventListener("change", sync);
    }

    media.addListener(sync);
    return () => media.removeListener(sync);
  }, []);

  const { flowNodes, flowEdges, flowHeight } = useMemo(() => {
    const nodeGap = isMobile ? 260 : 220;
    const startX = 0;
    const startY = isMobile ? 20 : 0;
    const nodeWidth = isMobile ? 180 : 200;
    const nodeHeight = isMobile ? 150 : 140;
    const flowHeight = isMobile
      ? startY + nodeGap * (nodes.length - 1) + nodeHeight + 220
      : 260;

    const flowNodes = nodes.map((node, index) => ({
      id: `${index + 1}`,
      position: isMobile
        ? { x: startX, y: startY + index * nodeGap }
        : { x: startX + index * nodeGap, y: startY },
      data: {
        label: (
          <div className="flow-node">
            <div className="flow-node-core">
              <span className="flow-node-dot" />
            </div>
            <p className="flow-node-title">{node.title}</p>
            <p className="flow-node-subtitle">{node.subtitle}</p>
          </div>
        ),
      },
      draggable: false,
      selectable: false,
      connectable: false,
      focusable: false,
      style: {
        borderRadius: 18,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(7, 15, 34, 0.85)",
        padding: 0,
        width: nodeWidth,
      },
    }));

    const flowEdges = nodes.slice(0, -1).map((_, index) => ({
      id: `e${index + 1}-${index + 2}`,
      source: `${index + 1}`,
      target: `${index + 2}`,
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 16,
        height: 16,
        color: "rgba(125, 211, 252, 0.85)",
      },
      style: {
        stroke: "rgba(125, 211, 252, 0.8)",
        strokeWidth: 1.6,
      },
    }));

    const totalWidth = isMobile
      ? nodeWidth
      : nodeGap * (nodes.length - 1) + nodeWidth;

    const centeredNodes = flowNodes.map((node) => ({
      ...node,
      position: {
        x: node.position.x - totalWidth / 2 + nodeWidth / 2,
        y: node.position.y,
      },
    }));

    return { flowNodes: centeredNodes, flowEdges, flowHeight };
  }, [isMobile, nodes]);

  return (
    <div
      className="case-study-flow"
      style={{ height: flowHeight, minHeight: flowHeight }}
    >
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        fitView
        fitViewOptions={{ padding: isMobile ? 0.6 : 0.25 }}
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
      >
        <Background
          gap={32}
          size={1}
          color="rgba(124, 77, 255, 0.16)"
        />
      </ReactFlow>
    </div>
  );
};

export default CaseStudyDiagram;
