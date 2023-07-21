import AggregateEntityNodeIcon from "../components/icons/AggregateEntityNodeIcon";
import CompositeAttributeNodeIcon from "../components/icons/CompositeAttributeNodeIcon";
import DashedLineEdgeIcon from "../components/icons/DashedLineEdgeIcon";
import DerivedAttributeNodeIcon from "../components/icons/DerivedAttributeNodeIcon";
import HierarchyNodeIcon from "../components/icons/HierarchyNodeIcon";
import KeyEdgeIcon from "../components/icons/KeyEdgeIcon";
import MultiValuedAttributeNodeIcon from "../components/icons/MultiValuedAttributeNodeIcon";
import PartialParticipationEdgeIcon from "../components/icons/PartialParticipationEdgeIcon";
import PrimaryAttributeNodeIcon from "../components/icons/PrimaryAttributeNodeIcon";
import RegularAttributeNodeIcon from "../components/icons/RegularAttributeNodeIcon";
import RegularEdgeIcon from "../components/icons/RegularEdgeIcon";
import RegularEntityNodeIcon from "../components/icons/RegularEntityNodeIcon"
import RegularRelationNodeIcon from "../components/icons/RegularRelationNodeIcon";
import TotalParticipationEdgeIcon from "../components/icons/TotalParticipationEdgeIcon";
import WeakEntityNodeIcon from "../components/icons/WeakEntityNodeIcon";
import WeakRelationNodeIcon from "../components/icons/WeakRelationNodeIcon";

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