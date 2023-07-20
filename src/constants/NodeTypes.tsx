import AggregateEntityNodeIcon from "../icons/AggregateEntityNodeIcon";
import CompositeAttributeNodeIcon from "../icons/CompositeAttributeNodeIcon";
import DerivedAttributeNodeIcon from "../icons/DerivedAttributeNodeIcon";
import HierarchyNodeIcon from "../icons/HierarchyNodeIcon";
import MultiValuedAttributeNodeIcon from "../icons/MultiValuedAttributeNodeIcon";
import PrimaryAttributeNodeIcon from "../icons/PrimaryAttributeNodeIcon";
import RegularAttributeNodeIcon from "../icons/RegularAttributeNodeIcon";
import RegularEntityNodeIcon from "../icons/RegularEntityNodeIcon"
import RegularRelationNodeIcon from "../icons/RegularRelationNodeIcon";
import WeakEntityNodeIcon from "../icons/WeakEntityNodeIcon";
import WeakRelationNodeIcon from "../icons/WeakRelationNodeIcon";

const NodeTypes = [
    {
      title: 'weak',
      type: 'entity',
      description: 'Weak Entity',
      icon: <WeakEntityNodeIcon />,
    },
    {
      title: 'regular',
      type: 'entity',
      description: 'Regular Entity',
      icon: <RegularEntityNodeIcon />,
    },
    {
      title: 'aggregate',
      type: 'entity',
      description: 'Aggregate Entity',
      icon: <AggregateEntityNodeIcon />,
    },
    {
      title: 'regularRelation',
      type: 'relation',
      description: 'Regular Relation',
      icon: <RegularRelationNodeIcon />,
    },
    {
      title: 'weakRelation',
      type: 'relation',
      description: 'Weak Relation',
      icon: <WeakRelationNodeIcon />,
    },
    {
      title: 'regularAttribute',
      type: 'attribute',
      description: 'Regular Attribute',
      icon: <RegularAttributeNodeIcon />,
    },
    {
      title: 'compositeAttribute',
      type: 'attribute',
      description: 'Composite Attribute',
      icon: <CompositeAttributeNodeIcon />,
    },
    {
      title: 'multiValuedAttribute',
      type: 'attribute',
      description: 'Multi-Valued Attribute',
      icon: <MultiValuedAttributeNodeIcon />,
    },
    {
      title: 'primaryAttribute',
      type: 'attribute',
      description: 'Primary Attribute',
      icon: <PrimaryAttributeNodeIcon />,
    },
    {
      title: 'derivedAttribute',
      type: 'attribute',
      description: 'Derived Attribute',
      icon: <DerivedAttributeNodeIcon />,
    },
    {
      title: 'hierarchy',
      type: 'miscallaneous',
      description: 'Hierarchy',
      icon: <HierarchyNodeIcon />,
    },

  ];

export default NodeTypes