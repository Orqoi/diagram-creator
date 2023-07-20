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
      description: 'Weak Entity',
      icon: <WeakEntityNodeIcon />,
    },
    {
      title: 'regular',
      description: 'Regular Entity',
      icon: <RegularEntityNodeIcon />,
    },
    {
      title: 'aggregate',
      description: 'Aggregate Entity',
      icon: <AggregateEntityNodeIcon />,
    },
    {
      title: 'regularRelation',
      description: 'Regular Relation',
      icon: <RegularRelationNodeIcon />,
    },
    {
      title: 'weakRelation',
      description: 'Weak Relation',
      icon: <WeakRelationNodeIcon />,
    },
    {
      title: 'regularAttribute',
      description: 'Regular Attribute',
      icon: <RegularAttributeNodeIcon />,
    },
    {
      title: 'compositeAttribute',
      description: 'Composite Attribute',
      icon: <CompositeAttributeNodeIcon />,
    },
    {
      title: 'multiValuedAttribute',
      description: 'Multi-Valued Attribute',
      icon: <MultiValuedAttributeNodeIcon />,
    },
    {
      title: 'primaryAttribute',
      description: 'Primary Attribute',
      icon: <PrimaryAttributeNodeIcon />,
    },
    {
      title: 'derivedAttribute',
      description: 'Derived Attribute',
      icon: <DerivedAttributeNodeIcon />,
    },
    {
      title: 'hierarchy',
      description: 'Hierarchy',
      icon: <HierarchyNodeIcon />,
    },

  ];

export default NodeTypes