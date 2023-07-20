import AggregateEntityNodeIcon from "../icons/AggregateEntityNodeIcon";
import CompositeAttributeNodeIcon from "../icons/CompositeAttributeNodeIcon";
import DashedLineEdgeIcon from "../icons/DashedLineEdgeIcon";
import DerivedAttributeNodeIcon from "../icons/DerivedAttributeNodeIcon";
import HierarchyNodeIcon from "../icons/HierarchyNodeIcon";
import KeyEdgeIcon from "../icons/KeyEdgeIcon";
import MultiValuedAttributeNodeIcon from "../icons/MultiValuedAttributeNodeIcon";
import PartialParticipationEdgeIcon from "../icons/PartialParticipationEdgeIcon";
import PrimaryAttributeNodeIcon from "../icons/PrimaryAttributeNodeIcon";
import RegularAttributeNodeIcon from "../icons/RegularAttributeNodeIcon";
import RegularEdgeIcon from "../icons/RegularEdgeIcon";
import RegularEntityNodeIcon from "../icons/RegularEntityNodeIcon"
import RegularRelationNodeIcon from "../icons/RegularRelationNodeIcon";
import TotalParticipationEdgeIcon from "../icons/TotalParticipationEdgeIcon";
import WeakEntityNodeIcon from "../icons/WeakEntityNodeIcon";
import WeakRelationNodeIcon from "../icons/WeakRelationNodeIcon";

const NodeTypes = [
    {
      title: 'weak',
      type: 'entity',
      description: 'Weak',
      icon: <WeakEntityNodeIcon />,
    },
    {
      title: 'regular',
      type: 'entity',
      description: 'Regular',
      icon: <RegularEntityNodeIcon />,
    },
    {
      title: 'aggregate',
      type: 'entity',
      description: 'Aggregate',
      icon: <AggregateEntityNodeIcon />,
    },
    {
      title: 'regularRelation',
      type: 'relation',
      description: 'Regular',
      icon: <RegularRelationNodeIcon />,
    },
    {
      title: 'weakRelation',
      type: 'relation',
      description: 'Weak',
      icon: <WeakRelationNodeIcon />,
    },
    {
      title: 'regularAttribute',
      type: 'attribute',
      description: 'Regular',
      icon: <RegularAttributeNodeIcon />,
    },
    {
      title: 'compositeAttribute',
      type: 'attribute',
      description: 'Composite',
      icon: <CompositeAttributeNodeIcon />,
    },
    {
      title: 'multiValuedAttribute',
      type: 'attribute',
      description: 'Multi-Valued',
      icon: <MultiValuedAttributeNodeIcon />,
    },
    {
      title: 'primaryAttribute',
      type: 'attribute',
      description: 'Primary',
      icon: <PrimaryAttributeNodeIcon />,
    },
    {
      title: 'derivedAttribute',
      type: 'attribute',
      description: 'Derived',
      icon: <DerivedAttributeNodeIcon />,
    },
    
    {
      title: 'keyEdge',
      type: 'constraint',
      description: 'Key',
      icon: <KeyEdgeIcon />,
    },
    {
      title: 'regularEdge',
      type: 'constraint',
      description: 'Regular',
      icon: <RegularEdgeIcon />,
    },
    {
      title: 'partialParticipationEdge',
      type: 'constraint',
      description: 'Partial Participation',
      icon: <PartialParticipationEdgeIcon />,
    },
    {
      title: 'totalParticipationEdge',
      type: 'constraint',
      description: 'Total Participation',
      icon: <TotalParticipationEdgeIcon />,
    },
    {
      title: 'hierarchy',
      type: 'miscallaneous',
      description: 'ISA Hierarchy',
      icon: <HierarchyNodeIcon />,
    },
    {
      title: 'dashedLineEdge',
      type: 'constraint',
      description: 'Superclass Connector',
      icon: <DashedLineEdgeIcon />,
    },

  ];

export default NodeTypes